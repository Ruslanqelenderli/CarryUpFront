import React, { Fragment, useEffect } from 'react'
import SideMenu from '../../components/SideMenu';
import { CardText } from 'reactstrap';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';

function StaffPage() {


    const staff = [
        {
            "id": 1,
            "name": "Alex Rosetta",
            "email": "alexyrosetta@egmail.com",
            "image": "staff-1.png",
        },
        {
            "id": 2,
            "name": "Maria July",
            "email": "mariajuly@egmail.com",
            "image": "staff-2.png",
        }
      
     ];
     
  
     console.log('staff',staff);
        
  return (
<Fragment>
  {staff.map((v) => (
 <Card>
 <CardImg top width="100%" src={v.image} />
        <CardBody>
          <CardTitle>{v.name}</CardTitle>

          <CardText>{v.email}</CardText>
         
        </CardBody>

 </Card>
  ))}


</Fragment>
  )
}

export default StaffPage
