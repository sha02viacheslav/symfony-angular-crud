<?php

namespace App\Repository;

use App\Entity\Orders;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
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
     * @return Orders[] Returns an array of Orders objects
     */
    public function findOrders($search)
    {
        return $this->createQueryBuilder('o')
            ->where('o.id LIKE :id')
            ->orWhere('o.customer LIKE :customer')
            ->orWhere('o.country LIKE :country')
            ->setParameter('id', '%' . $search . '%')
            ->setParameter('customer', '%' . $search . '%')
            ->setParameter('country', '%' . $search . '%')
            ->getQuery()
            ->getResult();
    }

    public function save($object)
    {
        $this->entityManager->persist($object);
        $this->entityManager->flush();
    }
}
