import './mylabel.css'
 


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
export const MyLabel = ({
    label = 'No label!',
    size = 'normal',
    color = "primary",
    allCaps = false,
    fontColor,
    backgroundColor= 'transparent'
}: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color}`} style={{ color: fontColor, backgroundColor }}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}
