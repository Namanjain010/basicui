import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'


class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            Topic: ""
        }
    }

    handlerusernamechange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handlerselectchange = (event) => {
        this.setState({
            Topic: event.target.value
        })
    }

    handleclickopen = (event) => {
        alert(`Hii ${this.state.username} having the age ${this.state.Topic}`)
    }
    handleChange = (event) => {
        this.setState({
            tabs: event.target.value
        })
    }

    render() {
        return (
            <div >
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant='title' color="blue">
                            Sample UI
                    </Typography>
                    </Toolbar>
                </AppBar>
                {/* <AppBar position="static">
                <Tabs   aria-label="simple tabs example">
                <Tab label="Item One"  autoFocus/>
                <Tab label="Item Two"  autoFocus/>
                <Tab label="Item Three"  autoFocus/>
                </Tabs>
                </AppBar> */}

                <TextField id="standard-basic" label="Name" onChange={this.handlerusernamechange} autoFocus />
                <Select value={this.state.Topic} onChange={this.handlerselectchange} autoFocus>
                    <MenuItem>None</MenuItem>
                    <MenuItem value="Ten">Ten</MenuItem>
                    <MenuItem value="Twenty">Twenty</MenuItem>
                    <MenuItem value="Thirty">Thirty</MenuItem>
                </Select>
                <Button variant='contained' color='inherit' onClick={this.handleclickopen}>Submit</Button>
            </div>
        )
    }
}

export default NavBar