import ActionCard from "./actionCard";
import "../assets/css/newest.css"
import Post from "./post";
import UpdateBar from "./updateBar";


function NewsFeed() {
    const membersNewest = [
        { name: 'Sondre Strangee', username: '@ 4 members', avatar: 'https://randomuser.me/api/portraits/men/41.jpg',notification:6 },
        { name: 'Damian Greyson', username: '@4 members', avatar: 'https://randomuser.me/api/portraits/men/67.jpg',notification:6 },
    ];
    const popularGroup = [
    { name: 'Stream Designers', username: '3 members', avatar: 'https://randomuser.me/api/portraits/men/79.jpg' },
    ];
    return (
        <>
        <div className="col-3">
            <ActionCard heading = "Newest Members" members = {membersNewest} notification = {true} />
            <ActionCard heading = "Newest Members" members = {membersNewest} notification = {true} />
        </div>
        <div style={{ marginTop:"2%"}} className="col-6">
            <UpdateBar/>
            <Post/>
            <Post/>
        </div>
        <div className="col-3">
            <ActionCard heading = "Popular Groups" members={popularGroup} button = {true}/>
            <ActionCard heading = "Popular Groups" members={popularGroup} button = {true}/>
        </div>
        </>
        
      
    );
  }
  
  export default NewsFeed;
  