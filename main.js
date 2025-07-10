
function handleDeviceChange(e){
    const shareButton=document.getElementById('share-btn');
    const popout=document.querySelector('.popout');
    const articlePreview=document.querySelector('.article-preview');
    if(e.matches){
        const reference=document.querySelector('.user-pfp');
        reference.parentNode.insertBefore(popout,reference);
        const user=document.getElementById('user');
        shareButton.addEventListener('click',()=>{
            const userElements=document.querySelectorAll('.active');
            popout.classList.toggle('hidden');
            userElements.forEach((element)=>{
                element.classList.toggle('hidden');
            })
            user.classList.toggle('user-active');
            shareButton.classList.toggle('share-icon-container-active');
            shareButton.querySelector('.share-icon-active').classList.toggle('hidden');
            shareButton.querySelector('.share-icon').classList.toggle('hidden');
        })
    }else{
        popout.remove();
        articlePreview.appendChild(popout);
        shareButton.addEventListener("click",(event)=>{
            popout.classList.toggle('hidden');
            shareButton.classList.toggle('share-icon-container-active');
            shareButton.querySelector('.share-icon-active').classList.toggle('hidden');
            shareButton.querySelector('.share-icon').classList.toggle('hidden');

        })
    }

}
const mediaQuery=window.matchMedia('(max-width:64rem)');
handleDeviceChange(mediaQuery);
mediaQuery.addEventListener("change",function(){
    handleDeviceChange(mediaQuery)
})


