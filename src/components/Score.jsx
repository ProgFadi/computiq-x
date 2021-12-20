import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const Score = (props) => {

    return (
        <Card >
            <Grid container padding={3} >
                <Grid item xs={12} pb={2}>
                    <Typography variant="h3">
                        Score Board
                    </Typography>
                </Grid>

                {props.data.map((score, index) => {
                    return (
                        <Grid item xs={12} p={2}>
                            <Box display="flex" alignItems="center"
                                justifyContent="space-between">
                                <Typography variant="body1">
                                    {`# ${index + ((props.index - 1) * 10)}
                                    ${score.user__score_profile__photo}`}
                                </Typography>
                                <Typography variant="body1">
                                    {score.user__first_name} {score.user__last_name}
                                </Typography>
                                <Typography variant="body1">
                                    {score.total_score}
                                </Typography>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </Card>
    )
}

export default Score
