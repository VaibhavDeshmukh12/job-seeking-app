import { FaApple, FaMicrosoft } from 'react-icons/fa';
import {SiTesla} from 'react-icons/si'

const PopularCompany = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Street 120 Mumbai, INDIA",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Ring Route New York, USA",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "High Hills Washington DC, USA",
      openPositions: 20,
      icon: <FaApple />,
    },
  ];
  return (
    <div className='companies'>
      <div className='container'>
        <h3>TOP COMPANIES</h3>
        <div className='banner'>
          {
            companies.map((element)=>{
              return(
                <div className='card' key={element.id}>
                  <div className='content'>
                    <div className='icon'>{element.icon}</div>
                    <div className='text'>
                      <p>{element.title}</p>
                      <p>{element.location}</p>
                    </div>
                  </div>
                  <button>Open Position {element.openPositions}</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default PopularCompany