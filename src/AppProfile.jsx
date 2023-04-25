import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';


function AppProfile() {
    const handleClick = (event) => {
        console.log(event);
        alert("버튼이 클릭됨!");
    }
    return (
        <>
            <button onClick={handleClick}>버튼</button>
            <Avatar 
                image='https://images.unsplash.com/photo-1668277272458-7bdd6ea0acf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
                isNew={true}
            />
            <Profile 
                image='https://images.unsplash.com/photo-1668277272458-7bdd6ea0acf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
                name='James Kim'
                title='프론트엔드 개발자'
                isNew={true}
            />
            <Profile 
                image='https://images.unsplash.com/photo-1679263503088-a85bca96a502?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
                name='Anna'
                title='백엔드 개발자'
            />
            <Profile 
                image='https://images.unsplash.com/photo-1676824669427-0bca4639756c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzOHx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
                name='Bob Yu'
                title='UX 디자인'
            />
        </>
    );
}

export default AppProfile;