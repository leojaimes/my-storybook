/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * displayed text
    */
    label?: string;
    /**
    * size label text
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize all text
     */
    allCaps?: boolean;
    /**
     * Color
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color applied to font
     */
    fontColor?: string;
    /**
     * Color applied to font
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
