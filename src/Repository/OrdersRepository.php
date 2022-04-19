<?php

namespace App\Repository;

use App\Entity\Orders;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @method Orders|null find($id, $lockMode = null, $lockVersion = null)
 * @method Orders|null findOneBy(array $criteria, array $orderBy = null)
 * @method Orders[]    findAll()
 * @method Orders[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrdersRepository extends ServiceEntityRepository
{
    /**@var EntityManagerInterface */
    private $entityManager;
    /**
     *@param EntityManagerInterface $entityManager
     */
    public function __construct(ManagerRegistry $registry, EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        parent::__construct($registry, Orders::class);
    }

    /**
     * @return Paginator
     */
    public function findOrders($search, $page = 1, $per_page = 10)
    {
        $firstResult = ($page - 1) * $per_page;

        $queryBuilder = $this->createQueryBuilder('o')
            ->where('o.id LIKE :id')
            ->orWhere('o.customer LIKE :customer')
            ->orWhere('o.country LIKE :country')
            ->setParameter('id', '%' . $search . '%')
            ->setParameter('customer', '%' . $search . '%')
            ->setParameter('country', '%' . $search . '%');

        $query = $queryBuilder->getQuery()
            ->setFirstResult($firstResult)
            ->setMaxResults($per_page);

        $paginator = new Paginator($query);

        return $paginator;

        // return $this->createQueryBuilder('o')
        //     ->where('o.id LIKE :id')
        //     ->orWhere('o.customer LIKE :customer')
        //     ->orWhere('o.country LIKE :country')
        //     ->setParameter('id', '%' . $search . '%')
        //     ->setParameter('customer', '%' . $search . '%')
        //     ->setParameter('country', '%' . $search . '%')
        //     ->getQuery()
        //     ->getResult();
    }

    public function save($object)
    {
        $this->entityManager->persist($object);
        $this->entityManager->flush();
    }
}
