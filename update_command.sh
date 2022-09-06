#!/bin/bash

# Fake History Generator Script (Random Interval 1-5 Days + Random Time)
# Latest commit will be 5 months ago from today

# Check if required files exist
if [ ! -f "scripts/vault/deploy-aave-strat.js" ]; then
    echo "Error: scripts/vault/deploy-aave-strat.js file not found!"
    exit 1
fi

if [ ! -f "scripts/vault/deploy-balancer.js" ]; then
    echo "Creating empty scripts/vault/deploy-balancer.js file..."
    touch scripts/vault/deploy-balancer.js
fi

# Get the total number of lines in the real file
total_lines=$(wc -l < "scripts/vault/deploy-aave-strat.js")
echo "Total lines in scripts/vault/deploy-aave-strat.js: $total_lines"

# Read the real file into an array
mapfile -t lines < "scripts/vault/deploy-aave-strat.js"

# Initialize the empty file
> "scripts/vault/deploy-balancer.js"

# Calculate base date (5 months ago from today)
base_date=$(date -d "5 months ago" "+%Y-%m-%d")
echo "Base date (5 months ago): $base_date"

# Track current line position and days accumulated
current_line=0
total_days_ago=0
commit_num=0

# Loop until all lines are processed
while [ $current_line -lt $total_lines ]; do
    # Generate random interval (1-5 days)
    random_interval=$((1 + RANDOM % 5))
    total_days_ago=$((total_days_ago + random_interval))
    
    # Generate random hour (9 AM to 8 PM - working hours)
    random_hour=$((9 + RANDOM % 12))
    
    # Generate random minute (0-59)
    random_minute=$((RANDOM % 60))
    
    # Calculate the date for this commit (base_date - total_days_ago)
    commit_date=$(date -d "$base_date - $total_days_ago days" "+%Y-%m-%d $random_hour:$random_minute:00")
    
    # Generate random number of lines to add (1-5, but don't exceed total)
    max_possible=$((total_lines - current_line))
    lines_to_add=$((1 + RANDOM % 5))
    
    # Ensure we don't add more lines than available
    if [ $lines_to_add -gt $max_possible ]; then
        lines_to_add=$max_possible
    fi
    
    # Add the lines to the file
    for ((i=0; i<$lines_to_add; i++)); do
        if [ $current_line -lt $total_lines ]; then
            echo "${lines[$current_line]}" >> "scripts/vault/deploy-balancer.js"
            ((current_line++))
        fi
    done
    
    # Git operations with specific date
    git add scripts/vault/deploy-balancer.js
    GIT_AUTHOR_DATE="$commit_date" GIT_COMMITTER_DATE="$commit_date" git commit -m "Contract development update - added $lines_to_add lines"
    
    # Show progress
    ((commit_num++))
    echo "Commit $commit_num: Added $lines_to_add lines (total: $current_line/$total_lines)"
    echo "  Date: $(date -d "$commit_date" "+%Y-%m-%d %H:%M")"
    echo "  Interval: $random_interval days, Time: ${random_hour}:${random_minute}"
    echo "  Total days from base: $total_days_ago"
    echo "----------------------------------------"
    
    # Small delay to ensure unique timestamps
    sleep 1
done
git push origin main
echo "Fake history generation complete!"
echo "Total commits created: $commit_num"
echo "Total lines added: $current_line/$total_lines"
echo "Total time span: $total_days_ago days from base date ($base_date)"

# Show the date range
first_commit_date=$(date -d "$base_date - $total_days_ago days" "+%Y-%m-%d")
last_commit_date=$base_date
echo "Date range: $first_commit_date to $last_commit_date"

# Show summary statistics
echo ""
echo "=== SUMMARY ==="
echo "Average lines per commit: $(echo "scale=2; $total_lines / $commit_num" | bc)"
echo "Average days between commits: $(echo "scale=2; $total_days_ago / $commit_num" | bc)"

# Final push reminder
echo ""
echo "Run 'git push origin main' to push the history to remote repository"
echo "Latest commit will appear as: $last_commit_date (5 months ago)"