import OwnerPic from './assets/owner.jpg'

function Owner(){
    return(
        <div className="container">
            <img className="img1" src={OwnerPic} alt="The owner"></img>
            <h2 className='h2'><u>Meet up with the owner</u></h2>
            <p className='pname'> 
                <b>Name: Samuel L. Jackson
                <br />
                Age: 47
                <br />
                Occupation: Real Estate Developer
                <br />
                Company: Whitmore Properties, LLC
                </b>
            </p>
            <p>Background: Samuel has over 20 years of experience in commercial and residential real estate. He started out flipping houses in his hometown of Denver, Colorado, before expanding into luxury condo developments and office complexes across the western U.S.</p>
            <p>Ownership History: Purchased the building in 2016 after a major renovation project. Currently leases out space to tech startups and boutique retailers.</p>
            <p>
                Personality: Known for being hands-on, detail-oriented, and committed to sustainable building practices
                <br />
                <br />
                Fun Fact: A huge supporter of the arts, Samuel has a sculpture garden on the rooftop open to the public once a month.
            </p>
        </div>
    );

}


export default Owner