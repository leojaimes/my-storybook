import './mylabel.css'


export interface MyLabelProps {
    /**
    * displayed text 
    */

    label?: string;

    /**
    * size label text
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3'

}
export const MyLabel = ({ label = 'No label!', size = 'normal' }: MyLabelProps) => {
    return (
        <span className={`${size}`}>
            {label}
        </span>
    )
}
