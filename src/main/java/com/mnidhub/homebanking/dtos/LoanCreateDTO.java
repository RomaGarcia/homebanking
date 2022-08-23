package com.mnidhub.homebanking.dtos;

public class LoanCreateDTO {

    private Long id;
    private String name;
    private Double maxAmount;
    private int payment;

    public LoanCreateDTO() {
    }

    public LoanCreateDTO(String name, Double MaxAmount, int payment) {
        this.name = name;
        this.maxAmount = maxAmount;
        this.payment = payment;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getMaxAmount() {
        return maxAmount;
    }

    public void setMaxAmount(Double maxAmount) {
        this.maxAmount = maxAmount;
    }

    public int getPayment() {
        return payment;
    }

    public void setPayment(int payment) {
        this.payment = payment;
    }
}
