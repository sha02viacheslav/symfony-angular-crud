<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use App\Services\OrderManagement;

/**
 * Class OrderController
 * @package App\Controller
 */
class OrderController extends AbstractController
{

    /**@var OrderManagement */
    private $orderManagement;

    /**
     * OrderController constructor.
     * @param OrderManagement $orderManagement
     */
    public function __construct(OrderManagement $orderManagement)
    {
        $this->orderManagement = $orderManagement;
    }

    /**
     * @Route("api/orders/getOrders", name="getOrder")
     * @param Request $request
     * @return JsonResponse
     */
    public function getOrders(Request $request): JsonResponse
    {
        $search = $request->query->get('query');
        $page = $request->query->get('page');
        $per_page = $request->query->get('per_page');
        $ordersList = $this->orderManagement->getOrdersBySearch($search, $page, $per_page);


        $totalResult = $ordersList->count();
        $items = $ordersList->getIterator()->getArrayCopy();
        return new JsonResponse(['success' => true, 'result' => $items, 'result_info' => ['total_count' => $totalResult]]);
    }

    /**
     * @Route("api/orders/changeStatus/{id}", name="orderCancel" , methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function cancelOrder(Request $request, $id): JsonResponse
    {
        $status = $request->getContent();
        $cancelOrder = $this->orderManagement->updateStatus($id, $status);
        return new JsonResponse(['success' => true, 'result' => $cancelOrder]);
    }
}
