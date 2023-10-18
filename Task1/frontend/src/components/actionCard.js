import React from 'react';

const ActionCard = ({heading, members,notification = false, button = false}) => {
  let member = members ? members : [
    { name: 'Sondre Strange', avatar: 'https://randomuser.me/api/portraits/men/41.jpg' },
    { name: 'Damian Greyson', avatar: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { name: 'The Green Goo', avatar: 'https://randomuser.me/api/portraits/men/79.jpg' },
    { name: 'Bearded Wonder', avatar: 'https://randomuser.me/api/portraits/men/91.jpg' },
  ];

  return (
    <div className="action-card">
      <h2>{heading}</h2>
      <ul>
        {member.map((member) => (
          <li key={member.name}>
          <div className="member-container">
            <img src={member.avatar} alt={member.name} />
            {
              notification === true ?  
              <span className="notification">
                {member.notification}
              </span> : null
            }
                    
          </div>
          <div>
            <span>{member.name}</span>
            <span className="username">{member.username}</span>
          </div> 
          {button === true ? <div className="group-actionss">
            <button className="join-button">
              <img src="./icon2.png" alt="JG" style={{border : 'none' , height : "28px" , width : "33px"}}/>
            </button>
          </div> : null } 
        </li>
        ))}
      </ul>
    </div>



  );
};

export default ActionCard;
