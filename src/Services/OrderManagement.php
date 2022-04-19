<?php

namespace App\Services;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use App\Repository\OrdersRepository;

/**
 * Class OrderManagement
 * @package App\Services
 */
class OrderManagement
{

    /**@var OrdersRepository */
    private $ordersRepository;

    /**@var EntityManagerInterface */
    private $entityManager;

    /**
     * @param OrdersRepository $ordersRepository
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(
        OrdersRepository $ordersRepository,
        EntityManagerInterface $entityManager
    ) {
        $this->ordersRepository = $ordersRepository;
        $this->entityManager = $entityManager;
    }

    public function getOrdersBySearch($search, $page, $per_page)
    {
        $orders = $this->ordersRepository->findOrders($search, $page, $per_page);
        return $orders;
    }

    public function updateStatus($id, $status)
    {
        $updateOrder = $this->ordersRepository->find($id);
        $updateOrder->status = $status;
        $this->ordersRepository->save($updateOrder);
        return true;
    }
}
