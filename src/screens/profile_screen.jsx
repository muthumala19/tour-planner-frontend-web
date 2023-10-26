import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow
} from 'mdb-react-ui-kit';
import {BsFacebook, BsGlobe2, BsInstagram, BsTwitter} from "react-icons/bs";
import Button from "@mui/material/Button";

const borderRadius = '3vh';

// Create a reusable Card component for profile details
function ProfileCard({profileCard}) {
    return (
        <MDBCard className="mb-4" style={{borderRadius: borderRadius}}>
            <MDBCardBody className="text-center">
                <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle border border-black"
                    style={{width: '150px', borderRadius: '50%'}} // Set border-radius to 50%
                    fluid
                />
                <p className="text-muted mb-1">{profileCard.introduction}</p>
                <p className="text-muted mb-4">{profileCard.address}</p>
                <div className="d-flex justify-content-center mb-2">
                    <Button>Follow</Button>
                    <Button outline className="ms-1">
                        Message
                    </Button>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}

// Create a reusable SocialLinks component for displaying social media links
function SocialLinks({socialLinks}) {
    const links = [
        {icon: <BsGlobe2/>, text: socialLinks.website},
        // {icon: <BsGithub/>, text: socialLinks.github, color: '#333333'},
        {icon: <BsTwitter/>, text: socialLinks.twitter, color: '#55acee'},
        {icon: <BsInstagram/>, text: socialLinks.instagram, color: '#ac2bac'},
        {icon: <BsFacebook/>, text: socialLinks.facebook, color: '#3b5998'}
    ];

    return (
        <MDBCard className="mb-4 mb-lg-0" style={{borderRadius: borderRadius}}>
            <MDBCardBody className="p-0">
                <MDBListGroup style={{borderRadius: borderRadius}}>
                    {links.map((link, index) => (
                        <MDBListGroupItem
                            key={index}
                            className="d-flex justify-content-between align-items-center p-3"
                        >
                            {link.icon}
                            <MDBCardText>{link.text}</MDBCardText>
                        </MDBListGroupItem>
                    ))}
                </MDBListGroup>
            </MDBCardBody>
        </MDBCard>
    );
}

// Create a reusable ProfileDetail component
function ProfileDetail({label, value}) {
    return (
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>{label}</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBCardText className="text-muted">{value}</MDBCardText>
            </MDBCol>
        </MDBRow>
    );
}

export default function ProfileScreen({user}) {
    return (
        <div style={{backgroundColor: ' rgba(217, 217, 217, 0.7)'}}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <ProfileCard profileCard={user.profileDetails}/>
                        <SocialLinks socialLinks={user.socialLinks}/>
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4" style={{borderRadius: borderRadius}}>
                            <MDBCardBody>
                                <ProfileDetail label="Full Name" value={user.profileDetails.fullName}/>
                                <hr/>
                                <ProfileDetail label="Email" value={user.profileDetails.email}/>
                                <hr/>
                                <ProfileDetail label="Phone" value={user.profileDetails.phone}/>
                                <hr/>
                                <ProfileDetail label="Mobile" value={user.profileDetails.mobile}/>
                                <hr/>
                                <ProfileDetail label="Address" value={user.profileDetails.address}/>
                            </MDBCardBody>
                        </MDBCard>
                        {/* Add your Project Status components here */}
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    );
}
