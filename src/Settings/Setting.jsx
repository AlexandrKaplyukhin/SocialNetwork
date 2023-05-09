import styled from "styled-components";

const SettingWrapper = styled.div`
`

const AllSetting = styled.div`
width: 30vw;
min-width:500px;
@media (max-width:450px){
    width: 100vw;
min-width:100px;
overflow: hidden;
}
`
const ThemeSet = styled.div`
    
`
const Mode = styled.div`
padding: 2%;
background-color: #ababab;
border-radius: 1em;
display: grid;
grid-template-columns: 4fr 1fr;
align-items: center;
margin-bottom: 1vh;
@media (max-width:450px){
    grid-template-columns: 3fr 1fr;
    padding: 3%;
    border-radius: 0;

}
`

const HR = styled.hr`
margin-bottom: 2vh;
`

const GroupButton = styled.div`
`

const Button = styled.button`
background-color: #0003b8;
font-style: italic;
color:white;
padding:6%;
border:none;
margin: 0 2%;
border-radius: 0.3em;
cursor:pointer;
&:hover{
    background-color: #0e0042;
    transition: 0.5s;
}
`
const TypeSetting = styled.h2`
   text-align: left;

@media (max-width:450px){
   text-align: center;
}
`

const Setting = (props) => {
  return (
    <SettingWrapper>
      <AllSetting>
        <ThemeSet>
        <TypeSetting>Theme</TypeSetting>
        <HR/>
        <Mode>
            <text>Choose mode</text>
            <GroupButton>
            <Button onClick={() => {
                window.localStorage.setItem('theme', 'light');
                window.location.reload();
            }}>Light</Button>
            <Button onClick={() => {
                window.localStorage.setItem('theme', 'dark');
                window.location.reload();

            }}>Dark</Button>
            </GroupButton>
            </Mode>
        </ThemeSet>
      </AllSetting>
    </SettingWrapper>
  );
};

export default Setting;
