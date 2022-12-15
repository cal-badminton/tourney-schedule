# Tournament Schedule

You must have npm installed on your computer and then run `npm install` in the root directory.

In the `src` folder, there is a file named `update_schedule.py`. Upload files `saturday.txt` and `sunday.txt` in the `by_time` folder ouputted by the match scheduler (https://github.com/cal-badminton/match_scheduler) into the `src` folder. On tournamentsoftware, go to the toolbar at the top, click `Match` and then download an excel spreadsheet for both days (clicking another `Match` button on the `Match` drag down menu).

After having all these files in the `src` folder, you run

```
python3 update_schedule.py <file_name.xlsx>
```

This will output a file in the `src` folder named `matchSchedule.json`. Once you have the json file created/updated. All you have to do is run

```
npm run deploy
```

The command above will fail if you do not have a remote connection to this repo named `origin`. Run the commands below if you have not set one up named origin.

```
git add remote origin https://github.com/cal-badminton/tourney-schedule.git
```

After running `npm run deploy`, it should create a build and then try to publish to github pages. You are done when you see the words `Published`. Updates may take a couple minutes before appearing on the website. You do not have to commit and push any changes to deploy it to Github Pages, but as always it is a good idea to save your changes every now and then.
