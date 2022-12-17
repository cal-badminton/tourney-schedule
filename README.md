# Tourney Schedule

You must have npm installed on your computer and then run `npm install` in the root directory.

In the `src` folder, there is a file named `update_schedule.py`. Upload files `saturday.txt` and `sunday.txt` in the `by_time` folder ouputted by the match scheduler (https://github.com/cal-badminton/match_scheduler) into the `src` folder. On tournamentsoftware, go to the toolbar at the top, click `Match` and then download an excel spreadsheet for both days (clicking another `Match` button on the `Match` drag down menu).

After having all these files in the `src` folder, you run

```
python3 update_schedule.py <file_name.xlsx>
```

This will output a file in the `src` folder named `matchSchedule.json`. During the tournament we will also be posting and updating the match times we are calling with this code snippet

```
<Alert severity="info" sx={{ p: 2 }}>
  This website is updated periodically (~15-30 minutes) during the tournament. Be sure to refresh and clear your cache periodically as well if the website does not update. Please look at the draws, your match times, and plan accordingly. Any in-person information from the tournament desk or tournament directors take precedent over information presented on this website.
  <br><br>
  <strong>We are currently calling XX:XX AM/PM Matches<strong>
</Alert>
```

in the `MainPage.js` file. Be sure to update this periodically as stated in the text above.
After you do all of this, run

```
npm run deploy
```

The command above will fail if you do not have a remote connection to this repo named `origin`. Run the commands below if you have not set one up named origin.

```
git add remote origin https://github.com/cal-badminton/tourney-schedule.git
```

After running `npm run deploy`, it should create a build and then try to publish to github pages. You are done when you see the words `Published`. Updates may take a couple minutes before appearing on the website. You do not have to commit and push any changes to deploy it to github pages, but as always it is a good idea to save your changes every now and then.
