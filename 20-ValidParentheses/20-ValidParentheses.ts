function isValid(s: string): boolean {
    const starts = ['(','{','[']
    const opposite = (a:string)=>{
        if (a ===')') return '('
        if (a ==='}') return '{'
        if (a ===']') return '['
    }
    const open = []
    

    for (let x = 0; x < s.length; x++ ){
        const letter = s[x]
        if(starts.includes(letter)){
            open.push(letter)
        }else{
            if(opposite(letter) != open.pop()) return false
        }
    }
    
    return open.length == 0
};