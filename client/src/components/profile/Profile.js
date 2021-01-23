import React, { useState, useEffect } from "react";
import getHashParams from "../../utils/getHashParams";

const Profile = () => {
    
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [error, setError] = useState(null);

    const handleRequest = (access_token, refresh_token, error) => {
        if (error) {
        setError(error);
        } else {
        if (access_token) {
            fetch("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
            })
            .then(response => response.json())
            .then(data => {
                setAccessToken(access_token);
                setRefreshToken(refresh_token);
                setUser(data);
            })
            .catch(err => {
                console.error(err);
            });
        }
        }
    };

    useEffect(() => {
        const params = getHashParams();

        let { access_token, refresh_token, error } = params;
        // let refresh_token = params.refresh_token;
        // let error = params.error;

        handleRequest(access_token, refresh_token, error);
    }, []);

    if (error) {
        return <p>Error: {error} </p>;
    }

    if (!accessToken) {
        return (
        <div>
            <a href="http://localhost:8888/login">
            Login to Spotify
            </a>
        </div>
        );
    }
    return (
        <div>
        <h2>Current User: {user && user.display_name}</h2>
        <h3>Access Token: {user && accessToken}</h3>
        <h3>Refresh Token: {user && refreshToken}</h3>
        </div>
    );
}

export default Profile
