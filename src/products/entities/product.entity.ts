import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
@PrimaryGeneratedColumn('uuid')
id: number;

@Column({type: 'text'})
title: string;

@Column({type: 'numeric'})
price: number;

@Column({type: 'text'})
description: string;


@Column({type: 'text'})
stock: string;

@Column({type: 'numeric'})
gender: string;








}