data "vercel_project_directory" "project_files" {
  path = "../"
}

resource "vercel_project" "project" {
  name      = "airdropmc"
  framework = "nextjs"

  git_repository = {
    type = "github"
    repo = "LukeMccon/airdropmc.com"
  }
}

resource "vercel_project_domain" "project_domain" {
  project_id = vercel_project.project.id
  domain     = "airdropmc.com"
}

resource "vercel_deployment" "deployment" {
  project_id  = vercel_project.project.id
  files       = data.vercel_project_directory.project_files.files
  path_prefix = data.vercel_project_directory.project_files.path
  production  = true
}
