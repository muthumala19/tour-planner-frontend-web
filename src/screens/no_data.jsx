import React from 'react';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
    },
    message: {
        fontSize: '24px',
        fontWeight: '',
        color: '#8a8787',
    },
};

export default function NoDataToDisplay() {
    return (
        <div style={styles.container}>
            <h1 style={styles.message}>No Data To Display</h1>
            {/* You can add additional content or icons here */}
        </div>
    );
}
