import { Speed } from '../types/index.js';
import { Board, Canvas } from '../ux/index.js';
class SlowPlayer {
    constructor() {
        this.color = "#3366FF";
        this.index = SlowPlayer.items_index;
        ++SlowPlayer.items_index;
        ++SlowPlayer.items_active;
    }
    handle_collision(snake) {
        snake.set_speed(Speed.SLOW);
        this.destroy();
    }
    draw() {
        if (!this.position) {
            return;
        }
        let x = (this.position.X * Board.block_size) + 2;
        let y = (this.position.Y * Board.block_size) + 2;
        let size = Board.block_size - 4;
        Canvas.draw_rect(x, y, size, size, this.color);
    }
    destroy() {
        Board.remove_object_at(this.position);
        delete SlowPlayer.instances[this.index];
        --SlowPlayer.items_active;
    }
}
SlowPlayer.instances = {};
SlowPlayer.items_index = 0;
SlowPlayer.items_active = 0;
export { SlowPlayer };
