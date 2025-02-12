import React from 'react'
import "../Css/Github.css"


const Github = () => {
  
  return (
    <div  className="github-stats" id='Git'>
      <h1>My<span class="highlight"> GitHub </span>Stats</h1>
      <div className='git-class'>
        <div className='class-one'>
      <img src="https://github-readme-stats.vercel.app/api?username=Ekthasurya&theme=holi&hide_border=false&include_all_commits=false&count_private=false" alt="GitHub Stats" />
      <img src="https://github-readme-streak-stats.herokuapp.com/?user=Ekthasurya&theme=holi&hide_border=false" alt="Top Languages" />
      </div>
      <div className='class-2'>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ekthasurya&theme=holi&hide_border=false&include_all_commits=false&count_private=false&layout=compact" alt="GitHub Streak" />
      </div>
      </div>
    </div>
  )
}

export default Github