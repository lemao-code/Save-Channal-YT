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
    background-color: #FFFFFF;


`

export const HeaderUser =  styled.View `
    width: 100%;
    height: 104px;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
    background-color: black;
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
`
export const InputSearch = styled.TextInput ` 
    width: 280px;
    height: 40px;
    border-radius: 4px;
    background-color: #EBEBEB;
    margin-top: 15px;
`

export const ContainerList = styled.View `
    display: flex;
    flex-direction: row;
    width: 300px;
    margin-top: 10px;
    height: 50px;

`