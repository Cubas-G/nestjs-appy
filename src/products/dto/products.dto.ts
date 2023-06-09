import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";


export class CreateProductDTo {
@IsString()
@IsNotEmpty()
@MinLength(5)
title: string;

@IsNumber()
@IsNotEmpty()
price: number;

@IsNumber()
@IsNotEmpty()
@MinLength(10)
name: number;


@IsNotEmpty()
@MinLength(5)
description: string;

@Optional()
stock: number;

@Optional()
gender: string;
}