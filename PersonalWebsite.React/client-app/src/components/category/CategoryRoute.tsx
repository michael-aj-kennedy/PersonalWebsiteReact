import React, { Component, ComponentType } from 'react';
import { useParams } from "react-router-dom";
import { Category } from './Category';

export function CategoryRoute() {
    const { category } = useParams();

    return (
        <Category categoryName={category ?? ""} />
    );
}