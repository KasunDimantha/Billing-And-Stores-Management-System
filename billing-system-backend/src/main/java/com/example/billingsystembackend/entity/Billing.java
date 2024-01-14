package com.example.billingsystembackend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "Billing_Table")
public class Billing {

    @Id
    @GeneratedValue
    private Long BId;
    private String BPname;
    private Long Bquentity;
    private Long Bprice;

    @ManyToOne
    @JoinColumn(name = "fk_o_id")
    private Order order;

    public Long getBId() {
        return BId;
    }

    public void setBId(Long BId) {
        this.BId = BId;
    }

    public String getBPname() {
        return BPname;
    }

    public void setBPname(String BPname) {
        this.BPname = BPname;
    }

    public Long getBquentity() {
        return Bquentity;
    }

    public void setBquentity(Long bquentity) {
        Bquentity = bquentity;
    }

    public Long getBprice() {
        return Bprice;
    }

    public void setBprice(Long bprice) {
        Bprice = bprice;
    }
}
