import React, { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'
import '../style/Post.css'
import no_preview from '../images/no_preview.png'

import { Tabs, Tab, Grid } from '@material-ui/core'

const Home = (props) => {
    const [homeTab, setHomeTab] = useState(false)
    const [tabOption, setTabOption] = useState(1)
    const handleChange = (event, newValue) => {
        const { name, value } = event.target
        console.log(name)
        // material ui tabs
        if (!name) {
            if (newValue === 1) { setHomeTab(false) }
            else { setHomeTab(true) }
            setTabOption(newValue)
        }
    }

    useEffect(() => {
        if (homeTab) {
            console.log('read home tab')
            const apiEndPoint = "http://localhost:8000/hive-db/v1.0.0/top_posts/"
            axios.get(apiEndPoint, {
                    headers: {
                        // TOKEN: "WrrXP6szu06wlLQVfAM3b0FD8i4612zc",
                    }
                })
                .then((response) => {
                    console.log('reach here')
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else{
            console.log('the other tabs')
        }
    }, [tabOption])
    const formDimensions = {
        xs: 10,
        sm: 10,
        md: 6,
        lg: 6,
        xl: 6,
    };
    return (
        <div>
            <Grid container direction="column" alignItems="center" spacing={3}>
                <Grid item {...formDimensions}>
                    <div className="TabBar">
                        <Tabs value={tabOption} onChange={handleChange} TabIndicatorProps={{ style: { background: "#FF5700" } }} centered >
                            <Tab label="Home" />
                            <Tab label="Comments" />
                        </Tabs>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home