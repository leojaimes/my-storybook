import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel, MyLabelProps } from '../../components/MyLabel';
 
 
//export component
export default    {
   title: 'UI/Etiquetas/MyLabel', //Carpeta a la que pertenece
   component: MyLabel,
  
} as ComponentMeta<typeof MyLabel> 



//create template
const Template : ComponentStory<typeof MyLabel>  = (args: MyLabelProps  )=>  <MyLabel {...args}   /> 
 


//Hostories
export const Basic = Template.bind({});
Basic.args = {
    size: "normal"//valor por default seleccionado en las Stroy Basic
}
 

export const AllCaps = Template.bind({});

export const Secondary = Template.bind({});