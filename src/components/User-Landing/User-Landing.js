// Imports
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Apollo Imports
import { useQuery } from '@apollo/client'
import GET_USER from '../../GraphQL/queries'
import { client } from '../../index'

// Component Imports
import UpdateUserInfoForm from '../Update-Form/Update-Form';

const UserLandingPage = () => {
  const userID = JSON.parse(localStorage.getItem("userData"));
  // eslint-disable-next-line
  const [updating, setUpdating] = useState(false);
  const { error, loading } = useQuery(GET_USER, {
    variables: { id: parseInt(userID) },
  });
  const queryData = client.readQuery({
    query: GET_USER,
    variables: { id: parseInt(userID) },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <Redirect to="/Error" />;

  return (
    <div className="landing-wrapper">
      {!updating && (
        <>
          <h1>Welcome {queryData.user.name}</h1>
          <div className="info-wrapper">
            <h2>Profile Info</h2>
            <div className="address">
              <h4>{queryData.user.street} </h4>
              <h4>
                {queryData.user.city} {queryData.user.state},{" "}
                {queryData.user.zip}
              </h4>
              <h4>{queryData.user.country}</h4>
            </div>
            {queryData.user.description && (
              <h4 className="about">{queryData.user.description}</h4>
            )}
            {!queryData.user.description && (
              <h4 className="about">
                {
                  "Uh oh, looks like you are missing an about me! Click Edit below to add one!"
                }
              </h4>
            )}
            <div className="button-wrapper">
              <button onClick={() => setUpdating(true)}>Edit</button>
            </div>
          </div>
          <div className="info-wrapper">
            <h2>Connection</h2>
            {!queryData.user.activePal && (
              <>
                <h4>
                  Looks like you arent connected with a pen pal, please click
                  here to find one!
                </h4>
                <button>Click</button>
              </>
            )}
            {queryData.user.activePal && (
              <>
                <h4 className="connection-name">
                  You are connected with {queryData.user.activePal.name} (
                  {queryData.user.activePal.country})
                </h4>
                <h4 className="about">{queryData.user.activePal.about}</h4>
                <div className="button-wrapper">
                  <Link to="/create-postcard">
                    <button>Send Postcard</button>
                  </Link>
                  <button>End Connection</button>
                </div>
              </>
            )}
          </div>
        </>
      )}
      {updating && (
        <UpdateUserInfoForm
          userID={parseInt(userID)}
          queryData={queryData.user}
          back={() => setUpdating(false)}
        />
      )}
    </div>
  );
}

export default UserLandingPage;
