<?php

declare(strict_types=1);

namespace App\Commands;

use App\Repository\OrdersRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpKernel\KernelInterface;
/**
 * Class ImportDataCommand
 * @package App\Commands
 */
final class ImportDataCommand extends AbstractCommand
{
    /** @var string */
    protected static $defaultName = 'app:import-orders-data';

    /**
     * ImportDataCommand constructor.
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
        parent::__construct();
        $this->commands = [
            new ImportOrderData($ordersRepository, $entityManager, $kernel)
            
        ];
    }


    /**
     *
     */
    protected function configure(): void
    {
        $this->setDescription('Imports Orders.');
    }
}
