import React, {useState, useEffect} from 'react'

function CounterHook() {
    const[count, setCount] = useState(0)
    const[text, setText] = useState('This is a text')
    const [info, setInfo] = useState({
        name:'',
        email: ''
    })
    const [articles, setArticles] = useState(['one', 'two', 'three'])
  

    const addArticle = () => {
      setArticles([...articles, 'new article'])
    }

    useEffect ( () => {
       document.title = `You Have Clicked ${count} times`
    })

  return (
    <div>
        
        <h1> {count} </h1>
        <button onClick={() => setCount(count + 1)} className='btn btn-danger'>Click Me</button>
         <h1> {text} </h1>
         <button onClick={() => setText('hello boys')}>Click Me</button>
         
         <br/>
         <br />
         <input type='text' className='form-control' value={info.name} onChange={e => setInfo({...info, name:e.target.value})}/>
         <br/>
         <input type='text' className='form-control' value={info.email} onChange={e => setInfo({...info, email:e.target.value})}/>
         <br/>
         <h2> My name is {info.name} </h2>
         <h2> My email is {info.email} </h2>

         <br/>
         <br />
          
          {articles.map( article => {
            return <h1 key={article}> {article} </h1>
          })}

          <button onClick={addArticle} className='btn btn-primary'>Add Article</button>

          <button onClick={() => setCount(count + 1)} className='btn btn-primary'>Change Title</button>
    </div>
  )
}
 
export default CounterHook