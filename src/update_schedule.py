import sys

import pandas as pd
import json
import re

# Update this if more days
days = [("saturday.txt", "saturday"), ("sunday.txt", "sunday")]

sheet_names = {"Saturday 03 Sep 2022": "saturday", "Sunday 04 Sep 2022": "sunday"}

# Update this if different events
event_name_conversions = {
    "MS A": "AMS",
    "MS B": "BMS",
    "MS C": "CMS",
    "MS D": "DMS",
    "WS A/B": "ABWS",
    "WS C": "CWS",
    "WS D": "DWS",
    "MD A": "AMD",
    "MD B": "BMD",
    "MD C": "CMD",
    "MD D": "DMD",
    "WD A/B": "ABWD",
    "WD C": "CWD",
    "WD D": "DWD",
    "XD A": "AXD",
    "XD B": "BXD",
    "XD C": "CXD",
    "XD D": "DXD",
}


def parse_tournament_matches(file):
    xls = pd.ExcelFile(file)
    matches_data = {}
    for sheet_name in xls.sheet_names:
        matches_data[sheet_names[sheet_name]] = xls.parse(sheet_name)

    parsed_matches = {}

    for day in matches_data:
        parsed_matches[day] = {}
        parsed_matches_data = parsed_matches[day]
        for _, row in matches_data[day].iterrows():
            event = event_name_conversions[row["Event"]]
            if event not in parsed_matches_data:
                parsed_matches_data[event] = {}
            parsed_matches_data[event][row["Nr"]] = [row["Round"],
                                                     row["Team 1"] + " vs. " + row["Team 2"],
                                                     row["Score"]]

    # Adjust this different days
    new_matches_info = {"saturday": [], "sunday": []}
    for d in days:
        with open(d[0], "r") as f:
            # First line is useless
            first = True
            for match in f.readlines():
                day = d[1]
                if first:
                    first = False
                    continue
                match_info = match.split("|")
                event = re.sub(r'\d+', '', match_info[1]).strip()
                match_number = int(re.findall(r'\d+', match_info[1])[0])
                current_events = parsed_matches[d[1].lower()][event]
                if match_number not in current_events:
                    continue
                match_data = current_events[match_number]
                new_match_data = [match_info[0].strip(),
                                  match_info[1].strip(),
                                  match_data[0].strip(),
                                  match_data[1].strip()]
                if match_data[2] is None or pd.isnull(match_data[2]):
                    new_match_data.append("NOT STARTED")
                else:
                    new_match_data.append(match_data[2])
                new_matches_info[day].append(new_match_data)

    return new_matches_info


def main():
    if len(sys.argv) != 2:
        print("Invalid arguments!")
        return

    parsed_match_info = parse_tournament_matches(sys.argv[1])

    with open("Match-Schedule.json", "w", encoding='utf-8') as f:
        json.dump(parsed_match_info, f, ensure_ascii=False, indent=4)


if __name__ == '__main__':
    main()