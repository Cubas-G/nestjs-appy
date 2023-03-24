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


@Optional()
@MinLength(15)
description: string;

@Optional()
slug: string;

@Optional()
stock: number;

@Optional()
gender: string;
}