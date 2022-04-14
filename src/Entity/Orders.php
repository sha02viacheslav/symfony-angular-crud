<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\OrdersRepository")
 */
class Orders
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    public $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)                   
     */
    public $customer;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    public $address1;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    public $city;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    public $country;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    public $postcode;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    public $amount;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    public $status;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    public $deleted;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public $date;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    public $lastModified;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    public $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    public $updatedAt;

    /**
    *@param EntityManagerInterface $entityManager
    */
    public function __construct(
        string $customer, 
        string $address1,
        string $city,
        string $country,
        string $postcode,
        string $amount,
        string $status,
        string $deleted,
        string $date,
        string $lastModified,
        \DateTimeInterface $createdAt
    )
    {
        $this->customer = $customer;
        $this->address1 = $address1;
        $this->city = $city;
        $this->country = $country;
        $this->postcode = $postcode;
        $this->amount = $amount;
        $this->status = $status;
        $this->deleted = $deleted;
        $this->date = $date;
        $this->lastModified = $lastModified;
        $this->createdAt = $createdAt;
    }

    /**
     * @return int
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return Orders
     */
    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getCustomer(): ?string
    {
        return $this->customer;
    }

    /**
     * @param string|null $customer
     * @return Orders
     */
    public function setCustomer(?string $customer): self
    {
        $this->customer = $customer;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getAddress1(): ?string
    {
        return $this->address1;
    }

    /**
     * @param string|null $address1
     * @return Orders
     */
    public function setAddress1(?string $address1): self
    {
        $this->address1 = $address1;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getCity(): ?string
    {
        return $this->city;
    }

    /**
     * @param string|null $city
     * @return Orders
     */
    public function setCity(?string $city): self
    {
        $this->city = $city;

        return $this;
    }

    /**
     * @param string|null
     */
    public function getCountry(): ?string
    {
        return $this->country;
    }

    /**
     * @param string|null $country
     * @return Orders
     */
    public function setCountry(?string $country): self
    {
        $this->country = $country;

        return $this;
    }

    /**
     * @param string|null
     */
    public function getPostcode(): ?string
    {
        return $this->postcode;
    }

    /**
     * @param string|null $postcode
     * @return Orders
     */
    public function setPostcode(?string $postcode): self
    {
        $this->postcode = $postcode;

        return $this;
    }

    /**
     * @param string|null
     */
    public function getAmount(): ?string
    {
        return $this->amount;
    }

    /**
     * @param string|null $amount
     * @return Orders
     */
    public function setAmount(?string $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    /**
     * @param string|null
     */
    public function getStatus(): ?string
    {
        return $this->status;
    }

    /**
     * @param string|null $status
     * @return Orders
     */
    public function setStatus(?string $status): self
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @param string|null
     */
    public function getDeleted(): ?string
    {
        return $this->deleted;
    }

    /**
     * @param string|null $deleted
     * @return Orders
     */
    public function setDeleted(?string $deleted): self
    {
        $this->deleted = $deleted;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getDate(): ?string
    {
        return $this->date;
    }

    /**
     * @param string|null $date
     * @return Orders
     */
    public function setDate(string $date): self
    {
        $this->date = $date;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getLastModified(): ?string
    {
        return $this->lastModified;
    }

    /**
     * @param string|null $lastModified
     * @return Orders
     */
    public function setLastModified(string $lastModified): self
    {
        $this->lastModified = $lastModified;

        return $this;
    }

    /**
     * @return \DateTime|null
     */
    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    /**
     * @param \DateTime|null $createdAt
     * @return Orders
     */
    public function setCreatedAt(?\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return \DateTime|null
     */
    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    /**
     * @param \DateTime|null $updatedAt
     * @return Orders
     */
    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

}
