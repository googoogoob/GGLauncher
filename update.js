async function getCurrentVersion(){
    try{
        const r = await fetch('https://cdn.jsdelivr.net/gh/googoogoob/GGLauncher/ver.txt', {cache: 'no-store'});
        if(!r.ok) return null;
        const text = await r.text();
        return text.trim();
    }catch(e){
        return null;
    }
}
