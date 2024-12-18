var t={};class s{constructor(t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]){this.size=4,this.score=0,this.status=s.statuses.IDLE,this.initialState=t,this.state=t.map(t=>[...t]),this.statuses={IDLE:"idle",PLAYING:"playing",WIN:"win",LOSE:"lose"}}start(){this.addRandomTile(),this.addRandomTile(),this.status=s.statuses.PLAYING}restart(){this.state=this.initialState.map(t=>[...t]),this.score=0,this.status=s.statuses.IDLE}addRandomTile(){let t=[];if(this.state.forEach((s,e)=>{s.forEach((s,i)=>{0===s&&t.push({row:e,col:i})})}),0===t.length)return;let s=Math.floor(Math.random()*t.length),{row:e,col:i}=t[s],a=.9>Math.random()?2:4;this.state[e][i]=a}getScore(){return this.score}getState(){return this.state}getStatus(){return this.status}updateScore(t){this.score=this.score+t}boardsAreEqual(t,s){for(let e=0;e<t.length;e++)for(let i=0;i<t[e].length;i++)if(t[e][i]!==s[e][i])return!1;return!0}checkStatus(){let t=!1,e=!1;for(let i=0;i<4;i++)for(let a=0;a<4;a++){if(2048===this.state[i][a]){this.status=s.statuses.WIN;return}0===this.state[i][a]&&(e=!0),(i<3&&this.state[i][a]===this.state[i+1][a]||a<3&&this.state[i][a]===this.state[i][a+1])&&(t=!0)}t||e||(this.status=s.statuses.LOSE)}moveLeft(){if(this.status===s.statuses.PLAYING){let t=this.state.map(t=>[...t]),s=[],e=[];for(let t=0;t<this.size;t++){let e=this.state[t].filter(t=>0!==t);for(;e.length<this.size;)e.push(0);s.push(e)}for(let t=0;t<this.size;t++){let i=s[t].filter(t=>0!==t);for(let t=0;t<i.length;t++)i[t]===i[t+1]&&(i[t]*=2,i.splice(t+1,1),this.updateScore(i[t]));for(;i.length<this.size;)i.push(0);e.push(i)}this.boardsAreEqual(t,e)||(this.state=e,this.addRandomTile(),this.checkStatus())}}moveRight(){if(this.status===s.statuses.PLAYING){let t=this.state.map(t=>[...t]),s=[],e=[];for(let t=0;t<this.size;t++){let e=this.state[t].filter(t=>0!==t);for(;e.length<this.size;)e.unshift(0);s.push(e)}for(let t=0;t<this.size;t++){let i=s[t].filter(t=>0!==t);for(let t=i.length-1;t>0;t--)i[t]===i[t-1]&&(i[t]*=2,i.splice(t-1,1),i.unshift(0),this.updateScore(i[t]));for(;i.length<this.size;)i.unshift(0);e.push(i)}this.boardsAreEqual(t,e)||(this.state=e,this.addRandomTile(),this.checkStatus())}}moveUp(){if(this.status===s.statuses.PLAYING){let t=this.state.map(t=>[...t]);for(let t=0;t<this.size;t++){let s=[];for(let e=0;e<this.size;e++)0!==this.state[e][t]&&s.push(this.state[e][t]);for(;s.length<this.size;)s.push(0);for(let e=0;e<this.size;e++)this.state[e][t]=s[e]}for(let t=0;t<this.size;t++){let s=[],e=0;for(;e<this.size;)e<this.size-1&&this.state[e][t]===this.state[e+1][t]?(s.push(2*this.state[e][t]),this.updateScore(2*this.state[e][t]),e+=2):(s.push(this.state[e][t]),e++);for(;s.length<this.size;)s.push(0);for(let e=0;e<this.size;e++)this.state[e][t]=s[e]}this.boardsAreEqual(t,this.state)||(this.addRandomTile(),this.checkStatus())}}moveDown(){if(this.status===s.statuses.PLAYING){let t=this.state.map(t=>[...t]);for(let t=0;t<this.size;t++){let s=[];for(let e=0;e<this.size;e++)0!==this.state[e][t]&&s.push(this.state[e][t]);for(;s.length<this.size;)s.unshift(0);for(let e=0;e<this.size;e++)this.state[e][t]=s[e]}for(let t=0;t<this.size;t++){let s=[],e=this.size-1;for(;e>=0;)e>0&&this.state[e][t]===this.state[e-1][t]?(s.unshift(2*this.state[e][t]),this.updateScore(2*this.state[e][t]),e-=2):(s.unshift(this.state[e][t]),e--);for(;s.length<this.size;)s.unshift(0);for(let e=0;e<this.size;e++)this.state[e][t]=s[e]}this.boardsAreEqual(t,this.state)||(this.addRandomTile(),this.checkStatus())}}}const e=new(t=s);function i(){let t=document.querySelector(".game-field");t.innerHTML="",e.getState().forEach(s=>{let e=document.createElement("tr");e.classList.add("field-row"),s.forEach(t=>{let s=document.createElement("td");s.classList.add("field-cell"),t>0&&s.classList.add(`field-cell--${t}`),s.textContent=0!==t?t:"",e.appendChild(s)}),t.appendChild(e)})}function a(){n.innerHTML=e.getScore()}const h=document.querySelector(".button"),r=document.querySelector(".message-start"),o=document.querySelector(".message-lose"),l=document.querySelector(".message-win"),n=document.querySelector(".game-score");h.addEventListener("click",()=>{h.classList.contains("start")?(e.start(),i(),a(),h.classList.remove("start"),h.classList.add("restart"),h.textContent="Restart",r.classList.add("hidden")):h.classList.contains("restart")&&(h.classList.remove("restart"),h.classList.add("start"),h.textContent="Start",o.classList.add("hidden"),e.restart(),i(),a())}),document.addEventListener("keydown",s=>{switch(s.preventDefault(),s.key){case"ArrowUp":e.moveUp();break;case"ArrowDown":e.moveDown();break;case"ArrowRight":e.moveRight();break;case"ArrowLeft":e.moveLeft()}a(),i(),e.getStatus()===t.statuses.WIN?l.classList.remove("hidden"):e.getStatus()===t.statuses.LOSE&&o.classList.remove("hidden")});
//# sourceMappingURL=index.c9031007.js.map
