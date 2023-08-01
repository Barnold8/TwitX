import os
import sys
import json

def loadBranches():
    os.system("git branch > branches")
    branches = []

    with open("branches","r") as file:
        for branch in file.readlines():
            branch = branch.strip()
            branch = branch.replace("*","")
            branch = branch.replace(" ","")
            branches.append(branch)
    os.remove("branches")

    return branches

def releaseUpdates():

    for branch in loadBranches():

        version = None

        with open("manifest.json","r") as file:
            data = json.load(file)
            
            version = data["version"]
        
        if version != None:
            os.system(f"git checkout {branch}")
            os.chdir("../")
            os.system(f"powershell Compress-Archive -Update -LiteralPath '{os.getcwd()}/TwitX' -DestinationPath '{os.getcwd()}/TwitX {branch} {version}.zip'")
            os.chdir("TwitX")
        else:
            print(f"Branch '{branch}' has no version number associated.")

releaseUpdates()
