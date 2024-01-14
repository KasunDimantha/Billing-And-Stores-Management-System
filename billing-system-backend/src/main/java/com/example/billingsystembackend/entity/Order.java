package com.example.billingsystembackend.entity;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "Order_Table")
public class Order {

    @Id
    @GeneratedValue
    @Column(name = "o_id")
    private Long OId;
    private String Odate;
    private Long Ototalamount;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_o_id", referencedColumnName = "o_id")
    private List<Billing> billing;

    public Long getOId() {
        return OId;
    }

    public void setOId(Long OId) {
        this.OId = OId;
    }

    public String getOdate() {
        return Odate;
    }

    public void setOdate(String odate) {
        Odate = odate;
    }

    public Long getOtotalamount() {
        return Ototalamount;
    }

    public void setOtotalamount(Long ototalamount) {
        Ototalamount = ototalamount;
    }
}
