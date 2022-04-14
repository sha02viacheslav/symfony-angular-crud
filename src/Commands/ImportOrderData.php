<?php

declare(strict_types=1);

namespace App\Commands;

use App\Entity\Orders;
use App\Repository\OrdersRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\HttpKernel\KernelInterface;
use function strval;

/**
 * Class ImportOrderData
 * @package App\Commands
 */
final class ImportOrderData implements Command
{
    /**@var OrdersRepository */
    private $ordersRepository;

    /**@var EntityManagerInterface */
    private $entityManager;

    /**@var KernelInterface */
    private $kernel;

    protected $projectDir;
    /**
     * ImportOrderData constructor.
     * @param OrdersRepository $ordersRepository
     * @param EntityManagerInterface $entityManager
     * @param KernelInterface $kernel
     */
    public function __construct(
        OrdersRepository $ordersRepository,
        EntityManagerInterface $entityManager,
        KernelInterface $kernel
    )
    {
        $this->ordersRepository = $ordersRepository;
        $this->entityManager = $entityManager;
        $this->projectDir = $kernel->getProjectDir();
    }

    /**
     *
     */
    public function up(): void
    {
        $this->importOrderData($this->entityManager);
    }

    /**
     * @param $entityManager
     */
    private function importOrderData($entityManager): void
    {
        $data = file_get_contents($this->projectDir.'/public/assets/orders.json');
        $jsonData = json_decode($data,true);
        foreach ($jsonData as $key => $value) {
            $importOrder = $this->ordersRepository->find($value['id']);
            if($importOrder){
                $entityManager->remove($importOrder);
            }else{
                $importOrder = new Orders(
                    $value['customer'], 
                    $value['address1'],
                    $value['city'],
                    $value['country'],
                    $value['postcode'],
                    strval($value['amount']),
                    $value['status'],
                    $value['deleted'],
                    strval($value['date']),
                    strval($value['last_modified']),
                    new DateTimeImmutable()
                );
            }
            $this->ordersRepository->save($importOrder);
        }
                
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return 'Import Orders Data';
    }
}