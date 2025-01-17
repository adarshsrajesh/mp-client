import React from 'react'
import { Link } from 'react-router-dom'
import stupid from '../assets/stupidheadphone.png'
import { Button, Card } from 'react-bootstrap'
import cardimg1 from '../assets/card1.jpg'
import cardimg2 from '../assets/card2.jpg'



const Landing = () => {
  return (
    <div style={{ padding: '100px' }} className='container'>
      <div className="row align-items-center">

        <div className="col-lg-5 ">
          <h1>Welcome to <span className='text-info'>Media Player</span></h1>
          <p style={{ textAlign: 'justify' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quod sit voluptatibus quam. Dolores in corrupti tenetur veritatis minus quisquam, numquam voluptate consequuntur? Reprehenderit exercitationem voluptatum corporis explicabo, hic natus!
          </p>

          <Link to={'/home'} className='btn btn-info'>Get Started</Link>



        </div>
        <div className="col">

        </div>
        <div className="col-6">
          <img src={stupid} alt="" className='img-fluid' />

        </div>
      </div>
      <h1 className='text-center'>Feature</h1>
      <div className="row ">

        <div className="col-4">

          <Card style={{ width: '18rem' }}>
            <Card.Img className='img-fluid' variant="top" src={cardimg1} />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                User can upload videos
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">

          <Card style={{ width: '18rem' }}>
            <Card.Img className='img-fluid' variant="top" src={cardimg2} />
            <Card.Body>
              <Card.Title>Categorize</Card.Title>
              <Card.Text>
                User can categorize videos as they wish
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cardimg1} />
            <Card.Body>
              <Card.Title>Managing History</Card.Title>
              <Card.Text>
                User can categorize videos.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* last */}

      <div className='row align-items-center mt-5 border p-5 '> 
        <div className="col-lg-6">

          <h2 className='text-warning'>Simple,Fast & Reliable</h2>
          <p style={{textAlign:'justify'}}> <span style={{fontSize:20}}>Play Everything:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quasi dolorem ipsum, perspiciatis quaerat quam cupiditate eos illum blanditiis maiores quas dicta laudantium exercitationem, officiis ut voluptate eius natus non?</p>
          <p style={{textAlign:'justify'}}> <span style={{fontSize:20}}>Categorize:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quasi dolorem ipsum, perspiciatis quaerat quam cupiditate eos illum blanditiis maiores quas dicta laudantium exercitationem, officiis ut voluptate eius natus non?</p>
          <p style={{textAlign:'justify'}}> <span style={{fontSize:20}}>Keep History:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quasi dolorem ipsum, perspiciatis quaerat quam cupiditate eos illum blanditiis maiores quas dicta laudantium exercitationem, officiis ut voluptate eius natus non?</p>
        </div>
        <div className="col-lg-6">
      <iframe width="100%" height="566" src="https://www.youtube.com/embed/QQwDeJFSVvc?list=RDGMEM916WJxafRUGgOvd6dVJkeQVMQQwDeJFSVvc" title="Full Video: Daavudi - దావూదీ | Devara | NTR | Janhvi Kapoor | Koratala Siva | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>
      

      </div>

    </div>
  )
}

export default Landing