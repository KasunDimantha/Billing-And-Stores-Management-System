package com.example.billingsystembackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
//@Table(name = "Store_Table")
public class Store {

    @Id
    @GeneratedValue
    private Long SId;
    private String SPname;
    private Long Squentity;
    private Long Sgetprice;
    private Long Ssellprice;

    public Long getSId() {
        return SId;
    }

    public void setSId(Long SId) {
        this.SId = SId;
    }

    public String getSPname() {
        return SPname;
    }

    public void setSPname(String SPname) {
        this.SPname = SPname;
    }

    public Long getSquentity() {
        return Squentity;
    }

    public void setSquentity(Long squentity) {
        Squentity = squentity;
    }

    public Long getSgetprice() {
        return Sgetprice;
    }

    public void setSgetprice(Long sgetprice) {
        Sgetprice = sgetprice;
    }

    public Long getSsellprice() {
        return Ssellprice;
    }

    public void setSsellprice(Long ssellprice) {
        Ssellprice = ssellprice;
    }
}
