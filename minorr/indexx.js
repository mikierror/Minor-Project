
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//input ka hai yeah
const feeds=document.querySelector(".feeds");
const feed=feeds.querySelectorAll(".feed");
const inco=document.querySelector(".incoo")

const searchfeed = () => {
    const val = inco.value.toLowerCase();
    feed.forEach(chat => {
        let nae=chat.querySelector('h3').textContent.toLowerCase();
        if(nae.indexOf(val) != -1){
            chat.style.display = 'block';
        } else{
            chat.style.display = 'none';
        }
    })
}

inco.addEventListener('keyup', searchfeed);


const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
} 

menuItems.forEach(item => {

    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
})


const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name=chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}


messageSearch.addEventListener('keyup', searchMessage);




messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


var tl=gsap.timeline()
tl.from("nav .img1, nav h2, nav .search-bar, nav .profile-pic,.button",{
    y:-30,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.15
})
tl.from("main .card-container, main .sidebar, button, .story,.create-post, .feeds , .messages, .friend-requests",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.15
})
tl.from("sidebar .notifications-popup",{
     opacity:0,

     delay:1
})




