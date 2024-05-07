import AppStyle from './assets/styles/App.module.scss';
function App() {

  let elementCount: string[] = [];

  const createElements = (totalElements:number):string[] => {
    for(let i = 0 ; i < totalElements ; i++){
      elementCount[i] = "block" + i;
    }
    return elementCount;
  }
  return (
    <>
      <div className={AppStyle.container}>
          {createElements(10).map(( elementClass, icount) => {

            return(
                <div key={icount} className={`${AppStyle[elementClass]}`}>
                  {icount%2 === 0 ? <p>We cool as ice</p> : <p>We could be blazing</p>} 
                  <button title='do-them-things'>Do them Things</button>
              </div>
            );
          })}
      </div>
    </>
  )
}

export default App
