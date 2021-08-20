class PostsController < ApplicationController

  def index
    @posts = Post.all.order("id DESC")
  end

  # def new
  # end

  def create
    # binding.pry
    post = Post.create(content: params[:content])
    render json:{post: post}
  end

  private 
  def post_params
    params.require(:post).permit(:content).merge(user_id: current_user.id)
  end

end
