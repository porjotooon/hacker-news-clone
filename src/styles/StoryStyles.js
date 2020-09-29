import styled from 'styled-components'

export const StoryWrapper = styled.section`
 padding-top: 10px;
 margin-bottom: 20px;
 border-top: 1px solid #cccccc;

 &:first-of-type{
     border-top: none;
 }
 
 &:last-of-type{
     margin-bottom: 0;
     padding-bottom: 0;
 } 
`