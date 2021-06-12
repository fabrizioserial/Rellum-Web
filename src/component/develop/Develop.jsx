import React from 'react'
import './Develop.css'
import { DevelopSection } from './developSection/DevelopSection';

export const Develop = () => {
    return (
        <div className="develop-cont">
            <DevelopSection side="I" image="1" title="Website development" text1="We develop quality pages with" text2="the latest technologies in this" text3="ambit"/>
            <DevelopSection side="D" image="3" title="Mobile aplication development" text1="We develop quality mobile aplication with" text2="the latest technologies in this" text3="ambit"/>
            <DevelopSection side="I" image="2" title="Custom development" text1="We develop bespoke technological" text2="solutions of the highest level" text3="and performance"/>
        </div>
    )
}
