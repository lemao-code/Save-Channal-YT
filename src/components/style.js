import styled from 'styled-components/native'

export const Container = styled.View `
    width: 100%;
    background-color: black;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Title = styled.Text `
    color: black;
    font-size: 35px;
`

export const Header = styled.View ` 
    display: flex;
    flex-direction: column;
    margin-bottom: 300px;
    position: absolute;
`

export const Button = styled.TouchableOpacity `
   width: 300px;
   height: 50px;
   background-color: white;
   border-radius: 30px;
   justify-content: center;
   align-items: center;
   margin-top: 20px;
   display: ${props => props.src};
`

export const ModalContainer = styled.View `
    width: 100%;
    background-color: white;
    height: 570px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px; 
    margin-top: 200px;
    
`

export const ContainerRegister = styled.View `
    display: ${props => props.src};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.box};
    flex: 1;
`
export const ContainerLogin = styled.View `
    display: ${props => props.src};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.box};
    flex: 1;
`

export const Input = styled.TextInput `
    width: 300px;
    height: 50px;
    background-color: rgb(216,216,216);
    margin: 10px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`

export const ButtonSignUp = styled.TouchableOpacity `
    width: 300px;
    height: 50px;
    background-color: black;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`

export const ContainerSearchChannel = styled.View ` 
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: blue;
    border: 2px solid black;

`

export const HeaderUser =  styled.View `
    width: 100%;
    height: 104px;
    border-radius: 32px;
    background-color: black;
`